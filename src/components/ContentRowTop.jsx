import React from "react";
import LastMovieInDb from "./LastMovieInDb";
import GenresInDb from "./GenresInDb";
import ContentRowMovies from "./ContentRowMovies";

function ContentRowTop() {
  return (
    <div>
      {/*  Content Row Top  */}
      <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>

        {/* Content Row Movies */}
        <ContentRowMovies />
        {/* End movies in Data Base */}

        {/* Content Row Last Movie in Data Base */}
        <div class="row">
          {/* Last Movie in DB */}
          <LastMovieInDb />
          {/*  End content row last movie in Data Base  */}

          {/* Genres in DB */}
          <GenresInDb />
        </div>
      </div>
      {/* End Content Row Top */}
    </div>
  );
}

export default ContentRowTop;
