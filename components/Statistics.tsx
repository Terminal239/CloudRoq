"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "./Reusable/Carousel";
import Container from "./Reusable/Container";
import Table from "./Reusable/Table";

type Props = {};

const Statistics = (props: Props) => {
  const [stocks, setStocks] = useState([]);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetch = async () => {
    setLoading(true);
    const response1 = await axios.get("/api/stocks");
    const response2 = await axios.get("/api/options");
    await Promise.all([response1, response2]);
    setStocks(response1.data);
    setOptions(response2.data);
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Container className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
      <Table data={stocks} loading={loading} label="Stocks" buttonLabel="Buy new" />
      <Table data={options} loading={loading} label="Options" buttonLabel="Buy new" />
      <Carousel />
    </Container>
  );
};

export default Statistics;
