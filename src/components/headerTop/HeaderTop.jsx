import React, { createContext } from 'react'
import Right from './right/Right'
import './headerTop.css';
import Left from './left/Left';

const user = createContext();

export default function HeaderTop() {
  return (
    <div className="headerTop">
      <Right />
      <Left />
    </div>
  )
}
