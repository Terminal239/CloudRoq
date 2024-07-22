type Props = {
  label: string;
  description: string;
};

const Card = ({ label, description }: Props) => {
  return (
    <div className="mb-4 rounded-md bg-gray-100 p-4">
      <div className="mb-4 flex items-center">
        <h3 className="grow text-lg font-semibold">{label}</h3>
        <div className="size-12 rounded-full bg-gray-300"></div>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
