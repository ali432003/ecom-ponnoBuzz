import React from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";
import { ToastAlert } from "../../utils/toast";
import { Spinner } from "@material-tailwind/react";

const index = () => {
  const [cate, setcate] = useState([]);
  const [load, setLoad] = useState(false);

  const fetchApiCate = () => {
    setLoad(true);
    axios
      .get("https://dummyjson.com/products/categories?limit=100")
      .then((res) => {
        // console.log(res.data);
        setcate(res.data);
        setLoad(false);
      })
      .catch((error) => {
        setLoad(false);
        // console.log(error);
        ToastAlert(error.code, "error");
      });
  };

  useEffect(() => {
    fetchApiCate();
  }, []);

  /** 
  * 
  * [
"smartphones",
"laptops",
"fragrances",
"skincare",
"groceries",
"home-decoration",
"furniture",
"tops",
"womens-dresses",
"womens-shoes",
"mens-shirts",
"mens-shoes",
"mens-watches",
"womens-watches",
"womens-bags",
"womens-jewellery",
"sunglasses",
"automotive",
"motorcycle",
"lighting"
]
 */

  const menCategories = cate.filter(
    (category) => category.includes("mens") && !category.includes("womens")
  );
  const womenCategories = cate.filter(
    (category) => category.includes("womens") && category.includes("mens")
  );
  const Cosmetics = cate.filter(
    (category) =>
      category.includes("fragrances") || category.includes("skincare")
  );
  const electronics = cate.filter(
    (category) =>
      category.includes("smartphones") || category.includes("laptops")
  );
  const vehicles = cate.filter(
    (category) =>
      category.includes("automotive") || category.includes("motorcycle")
  );
  const furniture = cate.filter(
    (category) =>
      category.includes("furniture") || category.includes("home-decoration")
  );
  const Acccesories = cate.filter(
    (category) =>
      category.includes("sunglasses") ||
      category.includes("groceries") ||
      category.includes("lighting")
  );

  // Function to render list of categories
  const renderCategoryList = (categories) => {
    return (
      <ul>
        {!load ? (
          categories.map((category, index) => (
            <li
              className="text-[15px] px-2 cursor-pointer hover:bg-[#e2e8f0] rounded-lg hover:text-[black]"
              key={index}
            >
              {category}
            </li>
          ))
        ) : (
          <p className="flex justify-center place-items-center text-white gap-2 text-[#475569]">
            Loading... <Spinner color="blue-gray" />
          </p>
        )}
      </ul>
    );
  };

  return (
    <div className="mt-[5.5rem]  max-w-screen hidden lg:block">
      <ul className="flex lg:flex-row flex-col w-auto  bg-[#cbd5e1] py-2  justify-evenly mx-auto list-none">
        <Tooltip
          arrow
          placement="bottom"
          className="text-[#334155] px-4 py-3 cursor-pointer"
          title={renderCategoryList(menCategories)}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <Typography
            as="li"
            variant="medium"
            color="black"
            className="flex cursor-pointer justify-center gap-x-2 p-1 font-medium w-screen"
          >
            <a className="flex max-w-screen items-center">Men</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </Typography>
        </Tooltip>

        <Tooltip
          arrow
          placement="bottom"
          className="   text-[#334155] px-4 py-3 cursor-pointer"
          title={renderCategoryList(womenCategories)}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <Typography
            as="li"
            variant="medium"
            color="black"
            className="flex justify-center items-center gap-x-2 p-1 font-medium w-screen"
          >
            <a className="flex items-center">Women</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </Typography>
        </Tooltip>

        <Tooltip
          arrow
          placement="bottom"
          className="   text-[#334155] px-4 py-3 cursor-pointer"
          title={renderCategoryList(electronics)}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <Typography
            as="li"
            variant="medium"
            color="black"
            className="flex justify-center items-center gap-x-2 p-1 font-medium w-screen"
          >
            <a className="flex items-center">Electronics</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </Typography>
        </Tooltip>

        <Tooltip
          arrow
          placement="bottom"
          className="   text-[#334155] px-4 py-3 cursor-pointer"
          title={renderCategoryList(furniture)}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <Typography
            as="li"
            variant="medium"
            color="black"
            className="flex justify-center items-center gap-x-2 p-1 font-medium w-screen"
          >
            <a className="flex items-center">Furniture</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </Typography>
        </Tooltip>

        <Tooltip
          arrow
          placement="bottom"
          className="   text-[#334155] px-4 py-3 cursor-pointer"
          title={renderCategoryList(Cosmetics)}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <Typography
            as="li"
            variant="medium"
            color="black"
            className="flex justify-center items-center gap-x-2 p-1 font-medium w-screen"
          >
            <a className="flex items-center">Cosmetics</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </Typography>
        </Tooltip>

        <Tooltip
          arrow
          placement="bottom"
          className="   text-[#334155] px-4 py-3 cursor-pointer"
          title={renderCategoryList(vehicles)}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <Typography
            as="li"
            variant="medium"
            color="black"
            className="flex justify-center items-center gap-x-2 p-1 font-medium w-screen"
          >
            <a className="flex items-center">Vehicles</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </Typography>
        </Tooltip>

        <Tooltip
          arrow
          placement="bottom"
          className="text-[#334155] px-4 py-3 cursor-pointer"
          title={renderCategoryList(Acccesories)}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <Typography
            as="li"
            variant="medium"
            color="black"
            className="flex cursor-pointer justify-center gap-x-2 p-1 font-medium w-screen"
          >
            <a className="flex max-w-screen items-center">Acccesories</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </Typography>
        </Tooltip>
      </ul>
    </div>
  );
};

export default index;
