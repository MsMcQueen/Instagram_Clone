import React from "react";
import { USERS } from "./users";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

export const POSTS = [
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e4/Open_Window%2C_Collioure.JPG",
    user: USERS[0].user,
    likes: 108570,
    caption: "Open Window, Collioure",
    profile_picture: USERS[0].image,
    comments: [
      {
        profile_picture: USERS[0].image,
        user: USERS[0].user,
        comment: "Look at my fabulous ocean view guys!",
      },
      {
        profile_picture: USERS[1].image,
        user: USERS[1].user,
        comment: "I'm coming over tomorrow for lunch!",
      },
      {
        profile_picture: USERS[14].image,
        user: USERS[14].user,
        comment: "Sounds fun! Can I come too, Henri?",
      },
    ],
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
    user: USERS[1].user,
    likes: 105430,
    caption: "Selfie",
    profile_picture: USERS[1].image,
    comments: [
      {
        profile_picture: USERS[1].image,
        user: USERS[1].user,
        comment: "What does everyone think of my new selfie?",
      },
      {
        profile_picture: USERS[9].image,
        user: USERS[9].user,
        comment:
          "You look great, Vincent!",
      },
    ],
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Monet_w1897.jpg",
    user: USERS[13].user,
    likes: 110597,
    caption: "Water Lilies",
    profile_picture: USERS[13].image,
    comments: [
      {
        profile_picture: USERS[13].image,
        user: USERS[13].user,
        comment: "Well, my water lilies are doing great!",
      },
      {
        profile_picture: USERS[9].image,
        user: USERS[9].user,
        comment:
          "We should all get together for dinner by the garden!",
      },
      {
        profile_picture: USERS[10].image,
        user: USERS[10].user,
        comment: "I'll be in Tahiti.",
      },
      {
        profile_picture: USERS[8].image,
        user: USERS[8].user,
        comment: "I may drop by...",
      },
    ],
  },
];
