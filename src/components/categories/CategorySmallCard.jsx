export default function CategorySmallCard({ name, total }) {
  return (
    <article className=" bg-slate-50">
      <text>{name}: {total}</text>
    </article>
  );
}
