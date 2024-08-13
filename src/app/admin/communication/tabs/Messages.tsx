'use client';

import InputComponent from "@/app/components/admin/Input";
import { Context } from "@/app/context/provider";
import { Avatar, Button, Card, CardBody, CardHeader, Dialog, DialogBody, DialogFooter, DialogHeader, Input } from "@material-tailwind/react";
import { useContext, useState } from "react";

export default function MessagesTab() {
  const ctx:any = useContext(Context);
  const isMobile = ctx.width < 768;

  const messages = [
    {
      text: 'Sure, Let me know what is issue?',
      timestamp: '40 mins ago',
      type: 'me'
    },
    {
      text: 'Hi I have Some Querries regarding 2nd Chaper',
      timestamp: '40 mins ago',
      type: 'user',
    }
  ];
  const [message, setMessage] = useState(messages);
  const [txt, setTxt] = useState('');
  
  const handleInput = (e: any) => {
    // setTxt(e.target.value);
    console.log(e.target.value);
  }

  const handleSend = (e:any) => {
    e.preventDefault();
    let msg = message;
    msg.push({
      text: txt,
      timestamp: 'now',
      type: 'me'
    })
    setMessage(msg);
    setPersonSelected({})
  }

  const Msg = ({ type }: { type: 'me' | 'user' }) => {

    return (
      <div className={`${type === 'me' ? 'bg-gray-100 rounded-tr-none ml-[50%]' : 'mr-[50%]'} p-4 rounded-md flex flex-col gap-2 text-gray-600`}>
        <label className="text-lg">
          {messages[type === 'me' ? 0 : 1].text}
        </label>
        <span className="text-sm text-black">
          {messages[type === 'me' ? 0 : 1].timestamp}
        </span>
      </div>
    );
  };

  const MessageBox = () => (
    <Card className="flex-1 flex">
      <CardBody className="flex flex-col gap-8 flex-1">
        { Object.keys(personSelected).length && (
          <div className="border-b border-b-solid border-b-gray-300 -mx-6 px-6 flex gap-4 pb-4">
            <div className="flex gap-4 flex-1">
              <Avatar src="/assets/images/avatar.svg" size="sm" />
              <div>
                <p className="font-medium">{personSelected.name}</p>
                <p className="text-sm text-blue-gray-500">{personSelected.position}</p>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button color="red" size="sm">Delete</Button>
              <Button color="blue" size="sm">Block</Button>
            </div>
          </div>

        ) || '' }
        <div className="flex flex-col gap-4 flex-1">
          { Object.keys(personSelected).length && (
            <>
              { message.map((msg, index) => (
                <Msg key={index} type={msg.type} />
              ))}
            </>
          ) || '' }
        </div>
        <div className="border-t border-t-solid border-t-gray-300 -mx-6 px-6 flex gap-4 pt-4">
          <Input type="text" label="Send Message" onChange={handleInput} />
          <Button color="green" onClick={handleSend}>Send</Button>
        </div>
      </CardBody>
    </Card>
  );

  const Message = () => (
    <>
      { !isMobile && ( <MessageBox personSelected={personSelected} /> ) }
      { isMobile && Object.keys(personSelected).length && (
        <Dialog open={true}>
          <DialogHeader>Inbox</DialogHeader>
          <DialogBody>
            <MessageBox personSelected={personSelected} />
          </DialogBody>
          <DialogFooter>
            <Button color="blue" onClick={() => setPersonSelected({})}>Close</Button>
          </DialogFooter>
        </Dialog>
      )}
    </>
  )


  const inbox = [
    { name: "John Doe", position: "Manager" },
    { name: "Jane Smith", position: "Developer" },
    { name: "Mike Johnson", position: "Designer" },
    { name: "Emily Brown", position: "Tester" },
    { name: "David Wilson", position: "Analyst" },
    { name: "Sarah Thompson", position: "Project Manager" },
    { name: "Chris Davis", position: "Scrum Master" },
    { name: "Amy Lee", position: "UX/UI Designer" },
    { name: "Mark Robinson", position: "Product Owner" },
    { name: "Laura Garcia", position: "Frontend Developer" }
  ];

  const [personSelected, setPersonSelected] = useState({});

  return (
    <section className="flex md:flex-row flex-col gap-4">
      <div className="md:w-[300px] w-full flex flex-col gap-2 max-h-[calc(100vh-135px)] overflow-auto">
        <InputComponent className="w-full sticky top-0 z-50 bg-white" />
        <div className="flex flex-col gap-1">
          { inbox.map((person, index) => (
            <Card key={index} className="cursor-pointer" onClick={() => setPersonSelected(Object.keys(personSelected).length && personSelected.name == person.name ? {} : person)}>
              <CardBody className="flex gap-2">
                <Avatar src="/assets/images/avatar.svg" size="sm" />
                <div>
                  <p className="font-medium">{person.name}</p>
                  <p className="text-sm text-blue-gray-500">{person.position}</p>
                </div>
              </CardBody>
            </Card>
          ))
          }
        </div>
      </div>
      <Message />
    </section>
  );
}