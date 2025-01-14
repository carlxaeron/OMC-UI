'use client';

import { useStore } from "@/app/context/provider";
import { Container, pageDataTypes, Title } from "./Contents";
import { ChangeEvent, useEffect } from "react";
import { ButtonComponent, Form, Input, Select, SelectWithMenu } from "./Form";
import { collection, doc, updateDoc } from "firebase/firestore";
import { parseFirebaseError } from "@/app/etc/firebase";

export default function Page3(props: pageDataTypes) {
  const storeState = useStore((state) => state.state);
  const storeAction = useStore((state) => state);
  const { isLoading, cform, setIsLoading, setSuccess, setErrMsg } = props;
  const form = { ...cform.otherInfo };
  const setForm = (data:object) => {
    props.setCform({
      ...cform,
      otherInfo: {
        ...cform.otherInfo,
        ...data,
      }
    });
  };

  const handleInput = (key: string, e?: ChangeEvent<HTMLInputElement> | boolean, value?: string | undefined, oldvalue?: string | undefined) => {
    setForm({
      ...form,
      [key]: value || e?.target?.value,
    });
  }

  const missionsList = [
    {
      "title": "Community Outreach in Rural Areas"
    },
    {
      "title": "Church Leadership Conference: Empowering Leaders in Ministry"
    },
    {
      "title": "Youth Evangelism and Discipleship Mission"
    },
    {
      "title": "Urban Outreach: Serving the Homeless"
    },
    {
      "title": "Global Missions Conference: Expanding the Gospel"
    },
    {
      "title": "Medical Mission to Remote Villages"
    },
    {
      "title": "Marriage and Family Enrichment Conference"
    },
    {
      "title": "Church Planting Mission in Unreached Areas"
    },
    {
      "title": "Worship and Arts Ministry Conference"
    },
    {
      "title": "Disaster Relief Mission: Rebuilding Communities"
    },
    {
      "title": "Children’s Ministry Mission: Reaching the Next Generation"
    },
    {
      "title": "Prison Ministry Mission: Hope for the Incarcerated"
    },
    {
      "title": "Cross-Cultural Evangelism Training Conference"
    },
    {
      "title": "Community Development and Sustainability Mission"
    },
    {
      "title": "Short-Term Mission Trip: Building Schools in Africa"
    },
    {
      "title": "Women's Ministry Conference: Faith and Leadership"
    },
    {
      "title": "Men's Retreat: Strengthening Faith and Brotherhood"
    },
    {
      "title": "Church Revitalization Conference: Renewing the Local Church"
    },
    {
      "title": "Intercessory Prayer Mission: Healing and Deliverance"
    },
    {
      "title": "Social Justice and Advocacy Conference: The Church in Action"
    }
  ]

  const membership = [
    {
      "step": 1,
      "title": "Attend a Membership Class",
      "description": "Learn about the church's beliefs, values, and what membership entails."
    },
    {
      "step": 2,
      "title": "Submit a Membership Application",
      "description": "Fill out and submit a form providing basic information and your testimony."
    },
    {
      "step": 3,
      "title": "Meet with Church Leadership",
      "description": "Have a one-on-one meeting with a pastor or elder to discuss your faith and commitment."
    },
    {
      "step": 4,
      "title": "Be Baptized (if not already)",
      "description": "If not previously baptized, arrange for baptism as part of the membership process."
    },
    {
      "step": 5,
      "title": "Attend a Membership Covenant Signing",
      "description": "Join other new members in signing a covenant, committing to the church’s mission and values."
    },
    {
      "step": 6,
      "title": "Public Membership Acknowledgment",
      "description": "Be formally introduced as a new member during a church service."
    }
  ]

  const validate = () => {
    let isValid = true, msg = "", dirty = true;

    if (!form?.mission) {
      msg = "Please select a mission trip";
      isValid = false;
    } else if (!form?.church) {
      msg = "Please enter the name of your local church";
      isValid = false;
    } else if (!form?.membership) {
      msg = "Please select your church membership status";
      isValid = false;
    }

    if (!form.mission && !form.church && !form.membership) dirty = false; 

    return {isValid, msg, dirty};
  };

  const isDisabled = isLoading || !validate().isValid;

  const submitForm = (e: any) => {
    e.preventDefault();
    if (!isDisabled) {
      setIsLoading(true);

      const fbDb = storeState.firebase?.db;
      const userDocRef = collection(fbDb, `user_data`);

      const docId = storeState.userData?.id;
      updateDoc(doc(userDocRef, docId), {
        otherInfo: form,
      }).then(() => {
        setIsLoading(false);
        setSuccess(true);
        storeAction.setState({
          registerStep: 2,
          userData: {
            ...storeState.userData,
            otherInfo: form,
          }
        });
      }).catch((error2:any) => {
        window.scrollTo(0, 0);
        setErrMsg(parseFirebaseError(error2));
        setTimeout(() => {
          setErrMsg('');
        }, 5000);
        setIsLoading(false);
      });
    }
  }

  return (
    <Container>
      <Form onSubmit={submitForm}>
        <Title>Other Information</Title>
        <SelectWithMenu
          optionLabel="Select or Type"
          options={missionsList.map((mission) => ({value: mission.title, label: mission.title}))}
          label="Mission Trip"
          defaultValue={form?.mission}
          onChange={e => handleInput("mission", false, e)}
          disabled={isLoading || storeState.userCredential && storeState.userData?.otherInfo?.mission}
          required
        />
        <Input
          label="Local Church"
          defaultValue={form?.church}
          onChange={e => handleInput("church", e)}
          disabled={isLoading || storeState.userCredential && storeState.userData?.otherInfo?.church}
          required
        />
        <SelectWithMenu
          optionLabel="Select or Type"
          options={membership.map((membership) => ({value: membership.title, label: membership.title}))}
          label="Church Membership"
          defaultValue={form?.membership}
          onChange={e => handleInput("membership", false, e)}
          disabled={isLoading || storeState.userCredential && storeState.userData?.otherInfo?.membership}
          required
        />
        <ButtonComponent loading={isLoading} type="submit" disabled={isDisabled}>Submit</ButtonComponent>
      </Form>
    </Container>
  )
}