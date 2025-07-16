import React from "react";
import PropertyCard from "../../components/PropertyCard";
const propertyData = [
  {
    name: "EROS SAMPOORNAM hkjlmnbiu iijnhbiojpk hiijnbuh",
    price: "22,000",
    image: "/home/eros.jpg",
    bed: "2",
    bath: "2",
    hall: "2",
    balcony: "2",
    kitchen: "2",
    city: "Noida",
    state: "UP",
  },
  {
    name: "ATS Greens Village",
    price: "25,000",
    image: "https://picsum.photos/400/300?random=2",
    bed: "3",
    bath: "2",
    hall: "1",
    balcony: "2",
    kitchen: "1",
    city: "Gurgaon",
    state: "Haryana",
  },
  {
    name: "Supertech Capetown",
    price: "20,000",
    image: "https://picsum.photos/400/300?random=3",
    bed: "2",
    bath: "2",
    hall: "1",
    balcony: "1",
    kitchen: "1",
    city: "Greater Noida",
    state: "UP",
  },
  {
    name: "Mahagun Moderne",
    price: "30,000",
    image: "https://picsum.photos/400/300?random=4",
    bed: "3",
    bath: "3",
    hall: "1",
    balcony: "3",
    kitchen: "1",
    city: "Delhi",
    state: "Delhi",
  },
  {
    name: "Prateek Wisteria",
    price: "28,000",
    image: "https://picsum.photos/400/300?random=5",
    bed: "3",
    bath: "2",
    hall: "1",
    balcony: "2",
    kitchen: "1",
    city: "Ghaziabad",
    state: "UP",
  },
  {
    name: "Amrapali Zodiac",
    price: "18,000",
    image: "https://picsum.photos/400/300?random=6",
    bed: "2",
    bath: "2",
    hall: "1",
    balcony: "2",
    kitchen: "1",
    city: "Faridabad",
    state: "Haryana",
  },
  {
    name: "Gaur City",
    price: "24,000",
    image: "https://picsum.photos/400/300?random=7",
    bed: "3",
    bath: "2",
    hall: "1",
    balcony: "2",
    kitchen: "1",
    city: "Lucknow",
    state: "UP",
  },
];
const PropertyContainer = () => {
  return (
    <div className="bg-white m-3 ml-1.5 rounded-md">
      <div className=" w-full p-4 pb-3 flex justify-between">
        <p className="font-semibold text-base text-center flex items-center">
          Showing 15 Properties for Rent
        </p>
        <select name="" id="" className="border border-gray-300 p-1 rounded">
          <option value="" disabled>
            Sort By
          </option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
          <option value="">Price (High to Low)</option>
          <option value="">Price (Low to High)</option>
        </select>
      </div>
      <hr className="mb-2 bg-gray-300 h-[1px] m-4  mt-1" />
      <div className="grid grid-cols-3 p-1">
        {propertyData.map((items, index) => (
          <PropertyCard
            key={index}
            name={items.name}
            price={items.price}
            image={items.image}
            bed={items.bed}
            bath={items.bath}
            hall={items.hall}
            balcony={items.balcony}
            kitchen={items.kitchen}
            city={items.city}
            state={items.state}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyContainer;
