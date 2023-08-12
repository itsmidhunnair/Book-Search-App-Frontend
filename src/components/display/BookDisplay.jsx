import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

import style from "../../assets/css/pdp.module.css";

import { getBook } from "../../graphQl/query";
import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import Loader from "../common/Loader";
import useBooks from "../../hooks/useBooks";

/**
 * Product Display Component
 */
const BookDisplay = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(getBook, { variables: { id: id } });

  const { toggleContent, fullContent } = useBooks();

  const book = data?.book;

  const description = fullContent
    ? book?.volumeInfo?.description
    : book?.volumeInfo?.description?.slice(0, 400) + "...";

  if (error) {
    console.log(error);
  }

  return loading ? (
    <Loader />
  ) : (
    <>
      <div className={style.container}>
        <div className={style.left_part}>
          <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt="" />
        </div>
        <div className={style.right_part}>
          <h3 className={style.title}>{book?.volumeInfo?.title}</h3>
          <div
            className={style.description}
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
          <Link
            sx={{ display: "inline-block", fontSize: "14px" }}
            component="button"
            onClick={toggleContent}
          >
            Show {fullContent ? "Less" : "More"}
          </Link>

          <div className={style.infoTable}>
            <TableContainer>
              <Table sx={{ minWidth: 200 }} aria-label="simple table">
                <TableBody>
                  {/* Authors */}
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      Authors
                    </TableCell>
                      <TableCell align="left">
                        <ul>
                      {book?.volumeInfo?.authors?.map((author) => <li>{author}</li>)}
                        </ul>
                    </TableCell>
                  </TableRow>

                  {/* Published Date */}
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      Published Date
                    </TableCell>
                    <TableCell align="left">
                      {book?.volumeInfo?.publishedDate}
                    </TableCell>
                  </TableRow>

                  {/* Page Count */}
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      Page Count
                    </TableCell>
                    <TableCell align="left">
                      {book?.volumeInfo?.pageCount}
                    </TableCell>
                  </TableRow>

                  {/* Average Rating */}
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      Average Rating
                    </TableCell>
                    <TableCell align="left">
                      <Rating
                        size={20}
                        allowFraction={true}
                        initialValue={book?.volumeInfo?.averageRating}
                        readonly={true}
                      />
                      <span style={{ fontSize: "13px", color: "#666" }}>
                        ({book?.volumeInfo?.ratingsCount})
                      </span>
                    </TableCell>
                  </TableRow>

                  {/* Price */}
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      Price
                    </TableCell>
                    <TableCell align="left">
                      {book?.saleInfo?.listPrice?.amount}{" "}
                      <span style={{ fontSize: "13px", color: "#666" }}>
                        {book?.saleInfo?.listPrice?.currencyCode
                          ? book?.saleInfo?.listPrice?.currencyCode
                          : "Not Available"}
                      </span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDisplay;
