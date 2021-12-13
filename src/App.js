import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

// class App extends React.Component {
//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       this.props.sohraniPizzzi(data.pizzas);
//     });
//   }

//   render() {
//     return (
//       <div className="wrapper">
//         <Header />

//         <div className="content">
//           <Routes>
//             <Route exact path="/" element={<Home items={this.props.items} />} />
//             <Route exact path="/cart" element={<Cart />} />
//           </Routes>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     sohraniPizzzi: (items) => dispatch(setPizzasAction(items)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
