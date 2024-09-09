//import PatientForm from "@/components/forms/patientForm";
import AppointmentsForm from "@/components/forms/AppointmentsForm";
import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import { getPatient } from "@/lib/actions/patients.actions";
import Image from "next/image";
import Link from "next/link";



const NewAppointment = async ({ params: {userId}} : SearchParamProps) => {
 const patient = await getPatient(userId)
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

        <AppointmentsForm
            type="create"
            userId={userId}
            patientId={patient.$id}
        />

            <p className="justify-items-end text-dark-600 xl:text-left mt-12">
              © 2024 CarePluse
            </p>
        </div>
      </section>
      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default NewAppointment;
