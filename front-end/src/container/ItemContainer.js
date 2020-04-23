import React from 'react';
import ItemList from '../components/ItemList/ItemList';
import Item from '../components/Item/Item';
import UserAPI from '../api/UserAPI';

class ItemContainer extends React.Component {

    state = {
        
    items: [
    {
        category: "Specialty Brew",
        name: "Caffe Mocha",
        price: 6.99,
        description: {
        size: "12 fl oz",
        details: "espresso combined with bittersweet mocha sauce and steamed milk,then topped with sweetened whipped cream."
        }
    },
    {
        category: "Specialty Brew",
        name: "Caramel Macchiato",
        price: 5.99,
        description: {
        size: "12 fl oz",
        details: "layers of fluffy foam*, cascading espresso, vanilla-flavored syrup and a drizzle of caramel."
        }
    },
    {
        category: "Specialty Brew",
        name: "Caffe Latte",
        price: 4.99,
        description: {
        size: "12 fl oz",
        details: "rich espresso balanced with steamed milk and a light layer of foam."
        }
    },
    {
        category: "Specialty Brew",
        name: "Cappuccino",
        price: 4.99,
        description: {
        size: "12 fl oz",
        details: "rich espresso lies in wait under a smoothed and stretched layer of thick milk foam"
        }
    },
    {
        category: "Hot Brew",
        name: "Caffe Americano",
        price: 3.99,
        description: {
        size: "12 fl oz",
        details: "espresso shots topped with hot water."
        }
    },
    {
        category: "Hot Brew",
        name: "Blonde Roast",
        price: 4.99,
        description: {
        size: "12 fl oz",
        details: "lightly roasted coffee."
        }
    },
    {
        category: "Hot Brew",
        name: "Decaf Roast",
        price: 2.99,
        description: {
        size: "12 fl oz",
        details: "American coffees with subtly rich flavors of chocolate and toasted nuts."
        }
    },
    {
        category: "Cold Brew",
        name: "Iced Caffe Mocha",
        price: 5.99,
        description: {
        size: "12 fl oz",
        details: "full-bodied espresso combined with bittersweet mocha sauce, milk and ice, then topped with sweetened whipped cream. "
        }
    },
    {
        category: "Cold Brew",
        name: "Iced Caramel Macchiato",
        price: 4.99,
        description: {
        size: "12 fl oz",
        details: "full-bodied espresso with vanilla-flavored syrup, milk and ice, then top it off with a caramel drizzle for an oh-so-sweet finish."
        }
    },
    {
        category: "Cold Brew",
        name: "Iced Caffe Latte",
        price: 4.99,
        description: {
        size: "12 fl oz",
        details: "rich espresso combined with milk and served over ice. "
        }
    },
    {
        category: "Cold Brew",
        name: "Iced Espresso",
        price: 3.99,
        description: {
        size: "12 fl oz",
        details: "espresso Roast over ice boasts rich, robust flavor and caramelly sweetness."
        }
    },
    {
        category: "Cold Brew",
        name: "Iced Coffee",
        price: 2.99,
        description: {
        size: "12 fl oz",
        details: "iced Coffee Blend served chilled and sweetened over ice."
        }
    },
    {
        category: "Cold Brew",
        name: "Iced Caffe Americano",
        price: 2.99,
        description: {
        size: "12 fl oz",
        details: "espresso shots topped with cold water produce a light layer of crema, then served over ice."
        }
    },
    {
        category: "Hot Tea",
        name: "Chai Latte",
        price: 3.99,
        description: {
        size: "12 fl oz",
        details: "black tea infused with cinnamon, clove and other spices is combined with steamed milk and topped with foam."
        }
    },
    {
        category: "Hot Tea",
        name: "Earl Grey Tea",
        price: 3.99,
        description: {
        size: "12 fl oz",
        details: "a strong black tea base with an essence of bergamot."
        }
    },
    {
        category: "Hot Tea",
        name: "Honey Citrus Mint Tea",
        price: 3.99,
        description: {
        size: "12 fl oz",
        details: "herbal tea, hot water, steamed lemonade and a touch of honey."
        }
    },
    {
        category: "Hot Tea",
        name: "Herbal Tea",
        price: 3.99,
        description: {
        size: "12 fl oz",
        details: "crafted with lemon, ginger, fennel, licorice root and soothing mint."
        }
    },
    {
        category: "Iced Tea",
        name: "Iced Chai Latte",
        price: 2.99,
        description: {
        size: "12 fl oz",
        details: "black tea infused with cinnamon, clove and other spices is combined with steamed milk and ice."
        }
    },
    {
        category: "Iced Tea",
        name: "Iced Black Tea",
        price: 2.99,
        description: {
        size: "12 fl oz",
        details: "black tea is sweetened just right and shaken with ice."
        }
    },
    {
        category: "Iced Tea",
        name: "Iced Green Tea",
        price: 2.99,
        description: {
        size: "12 fl oz",
        details: "green tea blended with mint, lemongrass and lemon verbena, with ice."
        }
    },
    {
        category: "Iced Tea",
        name: "Iced Passion Tea",
        price: 2.99,
        description: {
        size: "12 fl oz",
        details: "a blend of hibiscus, lemongrass and apple with ice."
        }
    },
    {
        category: "Iced Tea",
        name: "Iced Guava White Tea",
        price: 2.99,
        description: {
        size: "12 fl oz",
        details: "iced tea made with a combination of our guava-flavored fruit juice blend and Teavana iced white tea, then sweetened with liquid cane sugar with ice."
        }
    },
],
        itemIndex: 0,
        paramsId: ''
    }

  componentDidUpdate = (prevProps, prevState) => {
    const pathName = window.location.pathname.split('/')[2];
    if (prevState.paramsId && prevState.paramsId !== pathName) {
      let itemIndex = 0;
      this.state.itemList.forEach(function(item, index) {
        if (pathName === city.name.replace(/\s+/g, '-').toLowerCase()) {
          itemIndex = index;
          return itemIndex;
        }
      })
      this.setState({
        itemIndex: itemIndex,
        paramsId: pathName
      })
    }
  }
  componentDidMount = () => {
        UserAPI.itemIndex()
          .then(res => {
            let itemIndex = 0; 
            const pathName = window.location.pathname.split('/')[2];

            res.data.forEach(function(item, index) {
              if (pathName === item.name.replace(/\s+/g, '-').toLowerCase()) {
                itemIndex = index;
                return itemIndex;
              }
            });
            this.setState({
              itemList: res.data,
              itmeIndex: itemIndex,
              paramsId: pathName
            })
          })
    }

  changeItem = index => {
      this.setState({
          itemIndex: index
      })
  }
  render() {
    return(
        <div className="itemContainer">
            <ItemList items={this.state.itemList} changeItem={this.changeItem}/>
            <Item item={this.state.itemList[this.state.itemIndex]} user={this.props.user}/>
        </div>
    )
  }
}

export default ItemContainer;