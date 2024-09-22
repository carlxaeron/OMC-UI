import { NextApiRequest, NextApiResponse } from "next";
import db from './../../database';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    let output = '';
    new Promise((resolve, reject) => {
      db.each("SELECT * from tbl_quiz_question as quiz left join tbl_question_answer as answer where quiz.id = answer.question_id and answer.is_correct = 1", (err, row) => {
        output += 
        `<div style="border: 1px solid black;">
        Question:
        ${row.question}
        <br/>
        Answer:
        ${row.answer}
        <hr/>
        </div>`;
      }, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(output);
        }
      });
    }).then(() => {
      res.status(200).send(output);
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}