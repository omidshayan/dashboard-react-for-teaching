import React from 'react'
import Right from './right/Right'
import './headerTop.css';
import Left from './left/Left';
export default function HeaderTop() {
  return (
    <div className="headerTop">
      <Right />
      <Left />
    </div>
  )
}
