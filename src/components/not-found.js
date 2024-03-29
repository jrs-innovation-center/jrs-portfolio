const React = require('react')
const Nav = require('./nav')
const NotFound = () => {
  return (
    <div>
      <Nav/>
      <section className="vh-100 bg-washed-blue baskerville">
        <header className="tc ph5 lh-copy">
          <h1 className="f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple">404</h1>
          <h2 className="tc f1-l fw1">Sorry, we cant find the page you are looking for.</h2>
        </header>
      </section>
    </div>
  )
}

module.exports = NotFound
