/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        ad : [],
      // First list of posts.
      PostsListOne: [
        {
          backgroundImage: require("../images/content-management/1.jpeg"),
          category: "Business",
          categoryTheme: "dark",
          author: "Anna Kunis",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "Conduct at an replied removal an amongst",
          body:
            "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
          date: "28 February 2019"
        },]
      
    };
  }
  componentDidMount(){
    fetch("http://localhost:8000/advertisement")
    .then(result => result.json())
    .then(data =>{
      console.log(data);
        let ads = data.map((h,i)=>(
          <Col key={i} lg="3" md="6" sm="12" className="mb-4 h-25">
              <Card small className="card-post card-post--1">
                  {/* <div
                      className="card-post__image"
                      style={{ backgroundImage: `url(${h.image_url})` }}
                  > */}
                      {h.category}
                      <h4><Badge className="badge mr-3 mt-2">{h.status}</Badge></h4>
                  
              </Card>
          </Col>
        ));
        this.setState({ad :ads}, ()=>{
          console.log(this.state.ad);
        })
    })
    .catch((err)=>{console.log(err)});
  }

  render() {
    const {
      ad
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Button className="float-right mt-5 "><i class="fas fa-plus"> </i> New Advertisement</Button>
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Advertisement" subtitle="Components" className="text-sm-left" />
        </Row>
        {/* <Row>
          {ad}
        </Row> */}
        {/* First Row of Posts */}
        <Row>
          {ad.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${post.backgroundImage})` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Written by {post.author}
                    </a>
                  </div>
                </div>
                <CardBody>
                  <h5 className="card-title">
                    <a href="#" className="text-fiord-blue">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">{post.body}</p>
                  <span className="text-muted">{post.date}</span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BlogPosts;
