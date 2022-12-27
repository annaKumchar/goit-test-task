import React, { Component } from 'react';
import { CardSection, CardWrap } from './Header/Header.styled';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Statistics } from './Statistics/Statistics';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    followers: 100500,
    isFollowing: false,
  };
 handleClick = () => {
  this.setState(prevState => ({followers: prevState.isFollowing
    ? prevState.followers - 1 : prevState.followers + 1,
    isFollowing: !prevState.isFollowing,
  }));
 };


  render() {
const {followers, isFollowing} = this.state;
    return(
      <CardWrap>
      <CardSection>
      <Header/>
      <Hero/>
      <Statistics followers={followers}/>
      <Button isFollowing={isFollowing} onClick={this.handleClick}/>
      </CardSection>
      </CardWrap>
    )
  }
};
