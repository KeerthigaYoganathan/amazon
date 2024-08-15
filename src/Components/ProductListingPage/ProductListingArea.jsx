import React, { useState, useEffect } from "react";
import { headPhonesArr } from "../../JsonData/HeadPhones";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductListingArea = ({ filterMenuData }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [productCategory, setProductCategory] = useState(null);
  const reduxState = useSelector(({ data }) => data);
  const userSearchedData = () => {
    const tempData = Object.keys(reduxState?.productData);
    tempData.map((item, index) => {
      if (item?.startsWith(reduxState?.userTypedValue)) {
        const searchProduct = reduxState?.productData[item];
        setData(searchProduct);
        setProductCategory(item);
      }
    });
  };
  useEffect(() => {
    filterListingFn();
    userSearchedData();
  }, [filterMenuData]);
  const filterListingFn = () => {
    let tempData = headPhonesArr;
    if (filterMenuData.shipping) {
      tempData = tempData.filter(
        (ele, index) => ele.freeShipping === filterMenuData.shipping
      );
    } else {
      tempData = tempData;
    }
    if (filterMenuData.availability) {
      tempData = tempData.filter(
        (ele, index) => ele.inStock === filterMenuData.availability
      );
    } else {
      tempData = tempData;
    }
    if (filterMenuData.bestSelling) {
      tempData = tempData.filter(
        (ele, index) => ele.bestSelling === filterMenuData.bestSelling
      );
    } else {
      tempData = tempData;
    }
    if (filterMenuData.price === "min")
      tempData = tempData.sort((a, b) => a.buyingPrice - b.buyingPrice);
    else if (filterMenuData.price === "max") {
      tempData = tempData.sort((a, b) => b.buyingPrice - a.buyingPrice);
    } else {
      tempData = tempData;
    }
    setData(tempData);
  };
  const dateFormatFn = (dates) => {
    const date = new Date();
    date.setDate(date.getDate() + dates);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    let dateNum = date.getDate();
    return `${day}, ${month} ${dateNum}`;
  };
  const handleGoNext = (item) => {
    navigate(`/product?id=${item?.id}&productCategory=${productCategory}`);
  };
  return (
    <>
      <section className="product-listing-area-sec">
        <div className="product-listing-area-container">
          <div className="product-listing-row row m-0">
            {data?.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="product-listing-col col-lg-4 my-3"
                  onClick={(e) => {
                    handleGoNext(item);
                  }}
                >
                  <div className="product-listing-box">
                    <div className="product-listing-item">
                      <div className="product-listing-image text-center">
                        <img src={item.thumbnailImg} />
                      </div>
                      <div className="product-listing-details">
                        <p className="product-listing-name">{item.name}</p>
                        <span className="product-listing-rating">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-half"></i>
                          <span>{item.numberOfRatings}</span>
                        </span>
                        <p style={{ color: "rgb(86, 89, 89)" }}>
                          {item.noOfOrdersPastMonth} bought in past month
                        </p>
                        <p style={{ fontSize: "21px", fontWeight: "600px" }}>
                          {" "}
                          <sup style={{ fontSize: "12px", padding: "2px" }}>
                            &#36;
                          </sup>
                          {item.buyingPrice}
                        </p>
                        {item.mrpPrice ? (
                          <p style={{ color: "rgb(86, 89, 89)" }}>
                            <s>List:{item.mrpPrice}</s>
                          </p>
                        ) : null}
                        {item.freeShipping ? (
                          <p style={{ fontSize: "16px" }}>
                            Free delivery {dateFormatFn(item.freeDeliveryDate)}
                          </p>
                        ) : (
                          <p>
                            Free delivery {dateFormatFn(item.freeDeliveryDate)}{" "}
                            on $35 of items shipped by Amazon{" "}
                          </p>
                        )}
                        <p>
                          Or fastest delivery{" "}
                          {dateFormatFn(item.fastDeliveryDate)}
                        </p>
                        <button className="product-list-add-to-cart-btn">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductListingArea;
