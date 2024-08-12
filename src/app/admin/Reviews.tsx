'use client';

import { Card, CardBody, Chip } from "@material-tailwind/react";
import { PageHeader } from "../components/admin/PageHeader";

export default function Reviews() {

  const reviews = [
    { title: 'Total Reviews', content: '1000' },
    { title: '2 Star Review', content: '100', grade: '1.0' },
    { title: '3 Star Review', content: '100', grade: '2.0' },
    { title: '4 Star Review', content: '100', grade: '3.0' },
    { title: '5 Star Review', content: '100', grade: '4.0' },
    { title: '6 Star Review', content: '100', grade: '5.0' },
  ];
  
  
  return (
    <>
      <PageHeader title="Reviews" />
      <div className="md:flex lg:flex-nowrap flex-wrap md:gap-4">
        {reviews.map((review, index) => (
          <Card key={index} className="md:w-1/3 lg:w-1/6 w-full mb-4">
            <CardBody className="flex gap-4 text-black">
              <div className="w-full">
                <div className="text-xs mb-2">
                  {review.title}
                </div>
                <div className="font-bold text-3xl flex">
                  {review.content}
                  {review.grade && (
                    <Chip
                      value={review.grade}
                      className={`ml-1 text-lg ${
                        parseInt(review.grade) >= 3 ? 'bg-green-500' : 'bg-red-500'
                      }`}
                    />
                  )}
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  )
}