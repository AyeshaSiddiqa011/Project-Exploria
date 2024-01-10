const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressErr = require("../utils/ExpressErr.js");
const {reviewSchema} = require("../schema.js");
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js")
const reviewController = require("../controllers/reviews.js");
const review = require("../models/reviews.js")

//Post Review Route
router.post("/",
isLoggedIn,
validateReview, 
wrapAsync(reviewController.createReview));
  
  //Delete Review Route
  router.delete("/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview))
  
  module.exports = router;