import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui";

const ListingCard = ({ listing }) => {
  const imagePath = new URL(`../assets/${listing.images[0]}`, import.meta.url).href;

  return (
    <Link to={`/listings/${listing.id}`}>
      <Card className="w-[320px]">
        <img
          className="h-[200px] w-full rounded-md object-cover"
          src={imagePath}
          alt={listing.name}
        />
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold">{listing.name}</h2>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ListingCard;
