import React from 'react'

const Header = () => {
  return (
    <div className="flex bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">murphyAI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>Link</a></li>
          <li>
            <details>
              <summary>
                Parent
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                {/* <li><a>soon 1</a></li>
                <li><a>soon 2</a></li> */}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header