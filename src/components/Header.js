import {SearchBox, useQueryRules} from 'react-instantsearch-hooks-web'
import { BsFillGearFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { Stats } from './Stats';
import "./Header.css";
import { useState } from 'react';



function Header(props) {

  const [menuIsToggled, toggleMenu] = useState(false);
  const {items} = useQueryRules();
  const navigate = useNavigate();

  const handleIconClick = (name) => {
      props.setUser(name);
      toggleMenu(false);
  }

  const handleSearchInput = () => {
      if(items.length > 0 && items[0].hasOwnProperty('redirect')) {
          navigate(items[0].redirect);
      }
  }

  const [iconIsToggled, toggleIcon] = useState(false);

  return (
    <header className="header bg-white p-3 mb-5">

        <div className="container mx-auto flex justify-between items-stretch">

                <SearchBox
                    searchAsYouType="true"
                    classNames={{
                        root: "flex-auto mr-2 mb-2", 
                        input: "border-2 w-full p-2 pl-10",
                        submit: "jl-submit",
                        resetIcon: "hidden"
                    }}
                    onSubmit={handleSearchInput}
                />
            <div className="flex justify-center items-center mr-2">
              <BsFillGearFill/>
            </div>
            <div className="relative inline-block text-left">
                <button type="button"  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={() => toggleMenu(!menuIsToggled)}>
                {Object.keys(props.activeUser).length > 0 ? 'Log out' : 'Log in'}  
                  <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>

                      <div className={`${menuIsToggled ? 'block' : 'hidden' } absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                      <div className="py-1" role="none">
      
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0" onClick={() => handleIconClick('Marian')}>Login as Marian</a>
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2" onClick={() => handleIconClick('Martin')}>Login as Martin</a>
                        {
                          Object.keys(props.activeUser).length > 0 && 
                          <button type="submit" className="text-gray-700 bg-slate-100 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabIndex="-1" id="menu-item-3" onClick={() => handleIconClick('')}>
                          Sign out, {props.activeUser}
                          </button>
                          }
                      </div>
                    </div>

            </div>

        </div>
            <div className="container mx-auto flex">
                          <Stats/>
                            {Object.keys(props.activeUser).length > 0 && props.activeUser !== 'anonymous' && 
                            <>
                            <span className="relative l-2 align-middle">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                            </span>
                            <span className="ml-2">Showing personalised results for {props.activeUser}</span>
                          </>
                          }
                    </div>

    </header>
  )
}
export default Header