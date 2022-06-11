import { useState, useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchListView, fetchUser, deleteArtwork } from "../../redux/actions";
import ListItem from "./ListItem";
import ListPanel from "./ListPanel";
import ArtworkModal from "../_Admin/ArtworkModal/";
import { Helmet } from "react-helmet";
import Loading from "../../common/Loading";
import "./index.css";
import {
  shuffleList,
  reverseObjectList,
  sortObjectList,
} from "../../common/sortingFunctions";

function CreateNewArtworkButton() {
  return (
    <>
      <a
        className="waves-effect waves-light btn modal-trigger action-btn flex-center"
        href="#artworkModal"
        style={{ position: "fixed", bottom: 20, right: 20 }}
      >
        NEW +
      </a>
      <ArtworkModal id="" />
    </>
  );
}

function renderList(list) {
  return _.map(list, ({ title, imageUrl, height, width, typeLabel, _id }) => {
    var size;
    if (height) {
      size = `${height} x ${width}`;
    } else {
      size = null;
    }
    return (
      <ListItem
        title={title}
        image={imageUrl}
        size={size}
        typeLabel={typeLabel}
        _id={_id}
        key={_id}
      />
    );
  });
}

function ListView({ fetchListView, fetchUser, artworkList, auth }) {
  const [searchValue, setSearchValue] = useState("");
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("default");

  useEffect(() => {
    fetchListView().then(() => setLoading(false));
    fetchUser();
  });

  function filterList(list) {
    const self = this;
    let filter = [];

    /* sort filter */
    if (sort === "reverse") {
      reverseObjectList(list);
    } else {
      var noTitleArray = [];
      sortObjectList(list);
      noTitleArray = list.filter((item) => {
        return item.title === "";
      });
      list = list.filter((item) => {
        return item.title != "";
      });
      list.push.apply(list, noTitleArray);
    }

    /* search filter */
    if (list && searchValue != "") {
      filter = list.filter(function (item) {
        return (
          item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.typeLabel.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
    } else {
      filter = list;
    }

    return filter;
  }

  function handleSearchChange(event) {
    setSearchValue(event.target.value);
  }

  function handleSortChange(event) {
    setSort(event.target.value);
  }

  return (
    <div className="flex-center column">
      <Helmet>
        <meta charSet="utf-8" />
        <title>List | Skip Wiese</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="list-container">
        <div className="flex-center column">
          <ListPanel
            onSearchChange={handleSearchChange}
            searchValue={searchValue}
            onSortChange={handleSortChange}
            sort={sort}
          />
        </div>
        {auth && <CreateNewArtworkButton />}
        {loading ? (
          <Loading />
        ) : (
          <ul className="collection">
            {renderList(filterList(artworkList ? artworkList : []))}
          </ul>
        )}
      </div>
    </div>
  );
}

function mapStateToProps({ artworkList, auth }, ownProps) {
  return { artworkList, auth };
}

export default connect(mapStateToProps, {
  fetchListView,
  fetchUser,
  deleteArtwork,
})(ListView);
