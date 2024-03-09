type MapProps = {
  type: 'cities' | 'offer';
}

const Map = ({ type }: MapProps): JSX.Element => (
  <section className={`${type}__map map`}></section>
);

export default Map;
