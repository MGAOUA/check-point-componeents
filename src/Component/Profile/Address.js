function Address({ address }) {
  return (
    <div>
      <p>{address}</p>
    </div>
  );
}

Address.defaultProps = {
  address: "type your adresse",
};
export default Address;
