
// import { useFormik } from "formik";
import { object, string, number, date, InferType } from 'yup';
// import SimpleMap from './GoogleMap';

export default function ContactPage() {

    let userSchema = object({
      name: string().required(),
      age: number().required().positive().integer(),
      email: string().email(),
      website: string().url().nullable(),
      createdOn: date().default(() => new Date()),
    });
    
    //   const formik = useFormik({
    //     initialValues: {
    //       fullname: '',
    //       username: '',
    //       email: '',
    //       password: '',
    //       confirmPassword: '',
    //       acceptTerms: false,
    //     },
    //     validationSchema,
    //     // validateOnChange: false,
    //     // validateOnBlur: false,
    //     onSubmit: (data) => {
    //       console.log(JSON.stringify(data, null, 2));
    //     },
    //   });
  return (
    <div className="flex w-[100%]  flex-row justify-between  gap-4 px-[54px] py-[54px]">
      <div className="w-[312px] h-[507px] px-5 bg-white rounded-lg shadow flex-col justify-start items-start inline-flex">
        <div className="py-6 rounded-[10px] flex-col justify-start items-center gap-4 flex">
          <img src="src/assets/imges/MapPinCon.png" />
          <div className="w-[272px] text-center text-zinc-800 text-base font-normal font-primary leading-7">
            2715 Ash Dr. San Jose, South Dakota 83475
          </div>
        </div>
        <div className="w-[272px] h-[0px] border border-neutral-200"></div>
        <div className="py-6 rounded-[10px] flex-col justify-start items-center gap-4 flex">
          <img src="src/assets/imges/Email.png" />

          <div className="w-[272px] text-center text-zinc-800 text-base font-normal font-primary leading-7">
            Proxy@gmail.com
            <br />
            Help.proxy@gmail.com
          </div>
        </div>
        <div className="w-[272px] h-[0px] border border-neutral-200"></div>
        <div className="py-6 rounded-[10px] flex-col justify-start items-center gap-4 flex">
          <img src="src/assets/imges/PhoneCallGr.png" />

          <div className="w-[272px] text-center text-zinc-800 text-base font-normal font-primary leading-7">
            (219) 555-0114
            <br />
            (164) 333-0487
          </div>
        </div>
      </div>
      <form  className="w-[984px] h-[507px] relative">
        <div className="w-[984px] h-[507px] left-0 top-0 absolute bg-white rounded-lg shadow" />
        <button className="w-[199px] h-[51px] px-10 py-4 left-[50px] top-[406px] absolute bg-green-600 rounded-[43px] justify-center items-center gap-4 inline-flex">
          <div className="text-white text-base font-semibold font-primary leading-tight">
            Send Message
          </div>
        </button>
        <input
          type="text"
          placeholder="Subject"
          className="w-[884px] h-[98px] pl-4 pr-[799px] pt-3.5 pb-[63px] left-[50px] top-[284px] absolute bg-white rounded-md border focus:ring-1 focus:ring-inset focus:ring-green-600  border-neutral-200 justify-start items-center inline-flex"
        />
        <input
          type="text"
          placeholder="Hello"
          className="w-[884px] h-[49px] pl-4 pr-[824px] py-3.5 left-[50px] top-[219px] absolute bg-white rounded-md border border-green-600 justify-start items-center inline-flex"
        />

        <input
          placeholder="zakirsoft@gmail.com"
          type="email"
          className="w-[434px] h-[49px] pl-4 pr-[250px] py-3.5 left-[500px] top-[154px] absolute bg-white rounded-md border border-neutral-200 justify-start items-center inline-flex"
        />

        <input
          type="text"
          placeholder="Template Cookie"
          className="w-[434px] h-[49px] pl-4 pr-[282px] py-3.5 left-[50px] top-[154px] absolute bg-white rounded-md border border-neutral-200 justify-start items-center inline-flex"
        />

        <div className="w-[486px] left-[50px] top-[88px] absolute text-zinc-500 text-sm font-normal font-primary leading-[21px]">
          Do you fancy saying hi to me or you want to get started with your
          project and you need my help? Feel free to contact me.
        </div>
        <div className="left-[50px] top-[44px] absolute text-zinc-900 text-2xl font-semibold font-primary leading-9">
          Just Say Hello!
        </div>
      </form>
      {/* < SimpleMap  /> */}

    </div>
  );
}
