import * as React from 'react';
import { useState } from "react";
import MenuItem from '../menu-item/menu-item';

import './directory.scss'

interface ISection {
  id: string | number
  title: string
  image: string
  size?: string
}

const defautSections : ISection[] = [
  {
    id: 1,
    title: 'hats',
    image: 'https://i.ibb.co/cvpntL1/hats.png'
  },
  {
    id: 2,
    title: 'jackets',
    image: 'https://i.ibb.co/px2tCc3/jackets.png'
  },
  {
    id: 3,
    title: 'sneakers',
    image: 'https://i.ibb.co/0jqHpnp/sneakers.png'
  },
  {
    id: 4,
    title: 'womens',
    image: 'https://i.ibb.co/GCCdy8t/womens.png',
    size: 'large'

  },
  {
    id: 5,
    title: 'mens',
    image: 'https://i.ibb.co/R70vBrQ/mens.png',
    size: 'large'
  }

]

const Directory  = () => {
  const [sections, setSections] = React.useState<ISection[] | null>(defautSections);

  return (
        <div className="directory-menu">{
          sections?.map(({id, title, image, size})=> (
            <MenuItem key={id} title={title} imageUrl={image} size={size}/>
          ) )
        }</div>
  );
}

export default  Directory;