'use client';

import { PageHeader } from "@/app/components/admin/PageHeader";
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import InputComponent from "@/app/components/admin/Input";

const TABLE_HEAD = ["Customer", "Date", "Type", "Amount"];
const TABLE_ROWS = [
  {
    Customer: "Jon Doe",
    Date: "12/04/2024",
    Type: "Credit",
    Amount: "$95.00",
  },
  {
    Customer: "Jon Doe",
    Date: "12/04/2024",
    Type: "Credit",
    Amount: "$95.00",
  },
  {
    Customer: "Jon Doe",
    Date: "12/04/2024",
    Type: "Credit",
    Amount: "$95.00",
  },
  {
    Customer: "Jon Doe",
    Date: "12/04/2024",
    Type: "Credit",
    Amount: "$95.00",
  },
  {
    Customer: "Jon Doe",
    Date: "12/04/2024",
    Type: "Credit",
    Amount: "$95.00",
  },
];
const TableTxn = () => {
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ Customer, Date, Type, Amount }, index) => {
            const classes = (index + 1 == TABLE_ROWS.length) ? "p-4" : "p-4 border-b border-blue-gray-50";
            const name = Customer;
            const job = Date;
            const date = Type;
 
            return (
              <tr key={index}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {job}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {Amount}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

export default function Transactions() {
  return (
    <section className="mt-4 md:mt-0 flex flex-col gap-4">
      <PageHeader title="Transactions" />
      <div className="flex md:flex-row flex-col gap-4 justify-between">
        <InputComponent className="md:w-72"/>
        <Button>Filter</Button>
      </div>
      <TableTxn />
    </section>
  );
}