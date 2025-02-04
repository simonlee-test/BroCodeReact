export type Item = {
  id: number;
  calories: number;
  name: string;
};

interface Props {
  category?: string;
  items?: Item[];
}

const List = ({ category = 'Category', items = [] }: Props) => {
  const listItems = items.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; {item.calories}
    </li>
  ));
  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
};

export default List;
