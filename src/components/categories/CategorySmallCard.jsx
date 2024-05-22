export default function CategorySmallCard({name,total}) {
  return (
    <div className="container m-6  w-11/12 ">
        <article >
          <text>{name} {total}</text>
        </article>
    </div>
  );
}
