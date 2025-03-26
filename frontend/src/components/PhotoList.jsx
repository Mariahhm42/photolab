import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const sampleDataForPhotoList = [
  {
    id: 1,
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: "/Image-1-Full.jpeg",
      regular: "/Image-1-Regular.jpeg",
    },
    user: {
      username: "exampleuser",
      name: "Joe Example",
      profile: "/profile-1.jpg",
    },
  },
  {
    id: 2,
    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: "/Image-2-Full.jpeg",
      regular: "/Image-2-Regular.jpeg",
    },
    user: {
      username: "exampleuser",
      name: "Not Joe",
      profile: "/profile-1.jpg",
    },
  },
  {
    id: 3,
    location: {
      city: "Ottawa",
      country: "Canada",
    },
    urls: {
      full: "/Image-3-Full.jpeg",
      regular: "/Image-3-Regular.jpeg",
    },
    user: {
      username: "exampleuser",
      name: "Maybe Joe",
      profile: "/profile-1.jpg",
    },
  },
];

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {sampleDataForPhotoList.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={{
            imageSource: photo.urls.regular,
            profile: photo.user.profile,
            username: photo.user.name,
            location: photo.location,
          }}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
