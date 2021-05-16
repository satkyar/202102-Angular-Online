const PRODUCTS = [
  {cat: 'Foods', name: 'Patoto Chips'},
  {cat: 'Foods', name: 'Hot Dog'},
  {cat: 'Drinks', name: 'Pepsi'},
  {cat: 'Drinks', name: 'Coca Cola'},
  {cat: 'Snacks', name: 'Candy'},
  {cat: 'Snacks', name: 'Chocolate'},
  {cat: 'Foods', name: 'Humberger'}
]

  export class ProductService {
    search(category: string) {
      return PRODUCTS.filter(a => a.cat === category)
    }

    getCategories() {
      return [...new Set(PRODUCTS.map(a => a.cat))];
      // return PRODUCTS.map(a => a.cat).filter((value, index, self) => self.indexOf(value) === index)
    }

  }
