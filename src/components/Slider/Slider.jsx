import React from 'react'
import './slider.css'
import {BiRightArrow,BiLeftArrow} from 'react-icons/bi'
export default function Slider() {
  return (
    <div className='slider-container'>
      <div className='slider-text'>Société conventionnées</div>
    <div className="slider-carousel">
      <div className="slider-button"><BiLeftArrow size={'2rem'}/></div>
      <div className="slider-content-container">
          <div className="slider-tab"><img src='http://fnh.ma//uploads/actualites/cih_logo.jpg'/></div>
          <div className="slider-tab"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/2048px-Orange_logo.svg.png'/></div>
          <div className="slider-tab"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ41FQsWfXoT0utz6lGrxgX0bMYiHnGpA6Fove2ryLq&s'/></div>
          <div className="slider-tab"><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWQAAACNCAMAAAC3+fDsAAAAeFBMVEWdM5P///+aKpCcMJKXG4yZJI68fbbPpcqVEIr59fnp0+alRJuWFov9+v3lzuOiPJjy6fG3c7Djy+HXtdTFkcCpUaDgxd3w4+/TrM/CirzMnsfImMPcvtn48ffq1+iwYaizaqzAhrqmSp7YuNSqVKG6d7OwZai9gLdIxHsRAAADxElEQVR4nO3a63aaQBSGYZmDFkQOkqjxgKmJzf3fYfHA7EHoKrVpV4vv83M7kPAxDAPMaAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/xBtjTFWd/6krDXxSdVCdTVR1c+tjU/bGNX6KzdFe97p7/3v/wv7XpRlNEnbh6uM3k+2UXZSbld5ehtctfE4qX5bN/LX9qnMsujF+g21niyzbJ67on7eZWVS5A8RszoGZ7Pnm+6ozX4xCxqi8U3MZnL5YekHauaX4tZ4O1PZpbhxLc3qsmnuNRsqFV4TXMbNeloGbdnej1M/1/W1lNVLXRzLGbGruujOpbZB+2QMk8qD1uGf64ddR8aV3EvZTlz4coaMOzlzSS92e1tJV15cS4uhp2zXLr6jNxTo6c1IIV6lWT0wVIPNyJ2hL27LnUtep27zxCVqN3WtOXwPj3RG/+r2umNLKHmaxIWcSsjSUkKeumLkQlZjdx0MvCt3h6y+/jDjIChcJJ8VcrAf9hSjO2Sz9EJN1pvN1hs9ZGj4tJBfHjBkmTVUA+shttUTiUqk9FE3/LSQJ8MelDtDlllYEBwuVW1ltrGtIyHkfjpDtm+u6AZgK8GXdY2Q++kMWaZmQV4XdeqGZRceIffTHXLkigcXXhy64pe6HSH38rOQpxIeId+rf8j05LsR8l/wR0Ou2xHy54TstevqyQdCvjtkmeq5tw9ep5XurV5dcU7IF31Dllfx8tbee2iRPRpp+ObyJOReIXuP36G+Pn7H3sv+ZXzZWo2k9kTIF31D1u8SXpYapZRVjRfRibVV0Uy94Pduh48Tsnr6jZBHceYlWhzzfBUGDbtJnh/fvIL3fv6BQpZb0h0hWzlFPW28L64PE/JIufc+d4Q8sn5X7iHz0qwXIzxAyLaoj1RuSTL/DeQhQ+5oMwlZ7X8t5HfvE4j65srrgYesdd1D5cu8BB96n/pd8qX33dPKkoIevjVWbcgn7OOwPz9VHer9OmDMXHba9c/CG0K/1sUnPyqbytgiFvOOYjS6WX9Uz0RmunMl3pCo6bWPyk2pXo2Rpd7R22twUfPa1ia/XT+QvBqTJzfFKDe3C8GerxfRx8BHixNtDpMyDGfecjgzXobhrmj0MG3XWVVctxaAVhPhcVHuwrOy+JieVsxVxY+ivNTC6G08ba9WrE5vke12i/0DZDw6r2u1Kk1Tqai4eohoL4k9Fbu2V9bEylZiWWLriir+wbrb6u/G7UW2gzb8gREAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/2neWfC8xtI3sOAAAAABJRU5ErkJggg=='/></div>
          <div className="slider-tab"><img src='https://upload.wikimedia.org/wikipedia/commons/0/05/Logo_ofppt.png'/></div>
          <div className="slider-tab"><img src='https://landportal.org/sites/landportal.org/files/styles/220heightmax/public/Coat_of_arms_of_Morocco.svg_.png?itok=c2V9VlTi'/></div>
      </div>
      <div className="slider-button"><BiRightArrow size={'2rem'}/></div>
    </div>
    </div>
  )
}
