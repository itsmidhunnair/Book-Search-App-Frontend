import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, Pagination } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import SortComp from "./SortComp";
import FilterComp from "./FilterComp";
import { useSelector } from "react-redux";

/**
 * Book list container component
 */
const Books = ({ search, books, nextButton, activePage }) => {
  console.log("🚀 ~ file: Books.jsx:20 ~ Books ~ books:", books);
  const navigate = useNavigate();

  const { editedBooks, searchedBooks } = useSelector((state) => state.book);

  const pageChangeHandler = (event, pageNumber = 1) => {
    nextButton(search, pageNumber);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box
        component="div"
        sx={{
          mb: 5,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <SortComp />
        <span>
          {editedBooks?.length} of {searchedBooks?.length}
        </span>
        <Box component="div">
          <FilterComp apiSorting={true} />
          <FilterComp />
        </Box>
      </Box>
      <Grid
        component="div"
        container
      >
        {books?.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <Card sx={{ maxWidth: 340 }}>
              <CardMedia
                sx={{ height: "250px", backgroundSize: "contain" }}
                image={book.volumeInfo.imageLinks?.thumbnail}
                title="green iguana"
              />
              <CardContent>
                <Box sx={{ height: 60, overflowY: "hidden" }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {book.volumeInfo.title.length > 30
                      ? book.volumeInfo.title.slice(0, 30) + "..."
                      : book.volumeInfo.title}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    height: 105,
                    overflowY: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {book.volumeInfo.description?.slice(0, 155)}...
                </Typography>
              </CardContent>
              <CardContent sx={{ paddingY: "5px" }}>
                <span style={{ fontSize: "12px" }}>
                  <i>Published Date: </i>
                </span>
                <span style={{ fontSize: "12px", color: "#2196f3" }}>
                  <i>{book?.volumeInfo?.publishedDate}</i>
                </span>
              </CardContent>
              <CardContent sx={{ borderTop: "1px solid #d7d7d7" }}>
                <Rating
                  size={20}
                  allowFraction={true}
                  initialValue={book?.volumeInfo?.averageRating}
                  readonly={true}
                />
                {book?.volumeInfo?.ratingsCount && (
                  <span
                    style={{
                      fontSize: "11px",
                      color: "#b2b2b2",
                      verticalAlign: "middle",
                    }}
                  >
                    ({book?.volumeInfo?.ratingsCount})
                  </span>
                )}
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => navigate(`/book/${book.id}`)}
                >
                  Show
                </Button>
                <Box
                  sx={{
                    width: "100%",
                    textAlign: "right",
                    color: "#666",
                    fontSize: "12px",
                  }}
                >
                  {book.volumeInfo?.publisher}
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box component="div" sx={{ justifyContent: "center", display: "flex" }}>
        <Pagination
          count={10}
          color="primary"
          sx={{ marginTop: 5 }}
          page={activePage}
          onChange={(event, pageNumber) => pageChangeHandler(event, pageNumber)}
        />
      </Box>
    </Container>
  );
};

export default Books;
