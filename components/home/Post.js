import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Divider } from 'react-native-elements'

const postFooterIcons = [
  {
    name: "Like",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
    likedImageUrl: "https://img.icons8.com/ios-glyphs/90/fa314a/like.png",
  },
  {
    name: "Comment",
    imageUrl:
      "https://img.icons8.com/material-outlined/60/ffffff/speech-bubble.png",
  },
  {
    name: "Share",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/paper-plane.png",
  },
  {
    name: "Save",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/bookmark.png",
  },
];

const Post = ({ post }) => {
    return (
      <View style={{ marginBottom: 30 }}>
        <Divider width={1} orientation="vertical" />
        <PostHeader post={post} />
        <PostImage post={post} />
        <View style={{ marginHorizontal: 15, marginTop: 12 }}>
          <PostFooter />
          <Likes post={post} />
          <Caption post={post} />
          <CommentsSection post={post} />
          <Comments post={post} />
        </View>
      </View>
    );
}

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 8,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text
        style={{
          color: "white",
          margin: 15,
          fontSize: 17,
          fontWeight: "700",
        }}
      >
        {post.user}
      </Text>
    </View>

    <Text style={{ color: "white", fontWeight: "900" }}>...</Text>
  </View>
);

const PostImage = ({post}) => ( 
    <View
        style={{
            width: '100%',
            height: 450,
        }}
    >
    <Image 
        source={{ uri: post.imageUrl }} 
        style={{ height: '100%', resizeMode: 'cover' }}
    />
    </View>
)

const PostFooter = () => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.leftFooterIconsContainer}>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
        </View>

        <View>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
        </View>
    </View>
) 

const Icon = ({ imgStyle, imgUrl }) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{ uri: imgUrl }} />
    </TouchableOpacity>
)

const Likes = ({ post }) => (
    <View style={{flexDirection: 'row', marginTop: 10 }}>
        <Text style={{ color: 'white', fontSize: 17, fontWeight: '600' }}>
        {post.likes.toLocaleString('en')} likes
        </Text>
    </View>
)

const Caption = ({ post }) => (
  <View style={{ marginTop: 10 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontSize: 17, fontWeight: '600' }}>{post.user}</Text>
      <Text>{'  '}{post.caption}</Text>
    </Text>
  </View>
);

const CommentsSection = ({ post }) => (
    <View style={{ marginTop: 10 }}>
        {!!post.comments.length && (
            <Text style={{ color: "gray" }}>
                View {post.comments.length > 1 ? 'all' : ''} {post.comments.length}{' '}
                {post.comments.length > 1 ? "comments" : "comment"}
            </Text>
        )}
    </View>
);

// 0 comments -> Don't render component
// 1 comment -> Render component without "all" and singular "comment"
// 2 comments -> Render component with "all" and plural "comments"

const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{ flexDirection: "row", marginTop: 10 }}>
        <Image source={{ uri: comment.profile_picture }} style={styles.story} />
        <Text style={{ color: "white", marginLeft: 13 }}>
          <Text style={{ fontWeight: "600"}}>
            {comment.user}
          </Text>
          {"\n"}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  story: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },

footerIcon: {
    width: 33,
    height: 33,
},

leftFooterIconsContainer: {
    flexDirection: 'row',
    width: '32%',
    justifyContent: 'space-between',
},

})

export default Post
