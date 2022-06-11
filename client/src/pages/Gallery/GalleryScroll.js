import { useState, useEffect } from "react";
import _ from "lodash";
import map from "lodash/map";
import { connect } from "react-redux";
import { fetchArtworkList } from "../../redux/actions";

import { Link, withRouter, useParams } from "react-router-dom";
import ArtworkCard from "./ArtworkCard";
import GalleryPanel from "./GalleryPanel";
import MetaInfo from "../../common/MetaInfo";
import Loading from "../../common/Loading";
import {
  reverseObjectList,
  sortObjectList,
} from "../../common/sortingFunctions";

function renderList(list) {
  return map(list, (artwork) => {
    return <ArtworkCard artwork={artwork} key={artwork._id} />;
  });
}

function GalleryScroll({ fetchArtworkList, artworkList }) {
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("default");
  const [list, setList] = useState([]);

  const { type } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchArtworkList(type).then(() => setLoading(false));
  }, []);

  function filterList(list) {
    if (sort === "reverse") {
      reverseObjectList(list);
    }
    if (sort === "default") {
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
    return list;
  }

  function handleSortChange(event) {
    setSort(event.target.value);
  }

  return (
    <>
      <MetaInfo title="Mixed Media | Skip Wiese" />
      <GalleryPanel
        onSortChange={(event) => handleSortChange(event)}
        sort={sort}
        type={type}
      />
      {loading ? (
        <Loading />
      ) : (
        <div className="grid column">{renderList(filterList(artworkList))}</div>
      )}
    </>
  );
}

function mapStateToProps({ artworkList }, ownProps) {
  return { artworkList };
}

export default connect(mapStateToProps, { fetchArtworkList })(
  withRouter(GalleryScroll)
);
