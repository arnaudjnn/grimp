type GetOffersProps = {
  limit?: number;
  page: number;
  search: string;
};

export async function getOffers({ limit = 30, page, search }: GetOffersProps) {
  const offset = page - 1;

  const res = await fetch(
    `https://api.grimp.io/education/student/offers/all?limit=${limit}&offset=${offset}&search=${
      search || "Chef de Projet"
    }`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GRIMP_API_TOKEN}`,
      },
    }
  );
  const data = await res.json();

  return {
    page,
    search,
    totalPages: Math.ceil(data.offersCount / limit),
    ...data,
  };
}

type GetOfferProps = {
  id: string;
};

export async function getOffer({ id }: GetOfferProps) {
  const res = await fetch(
    `https://api.grimp.io/education/student/offers/${id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GRIMP_API_TOKEN}`,
      },
    }
  );
  const data = await res.json();
  return data;
}
