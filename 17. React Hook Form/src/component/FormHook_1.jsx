import { useForm } from 'react-hook-form';

export default function FormHook_1() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstname: 'peter',
      middlename: '',
      lastname: '',
    },
  });

  //Simulationg API Call
  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log('sumbmitting the form', data);
  }
  // here, when we click on submit, our async function named onSubmit gets triggered. There is delay of five second as per the function logic. After this delay of 5 seconds, our form gets submitted and we get the result in output
  // Within and between that 5 sec delay, there shouldn't be any submit event.If there is any, then, there will be multiple same data submitted to the backend which is not good and creates problem. This is the state that we need to avoid
  // To avoid this, we should use isSubmitting formState of React Hook Form. This isSubmitting shows that the form is on submitting phase or not. If the form is in submitting phase then isSubmitting will be in true state or else isSubmitting will be in false state

  return (
    <form className="form_login" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">First Name:</label>
        <input
          className={errors.firstname ? 'input-error' : ''}
          type="text"
          {...register('firstname', {
            required: 'First Name is Required',
            minLength: { value: 3, message: 'Min Length atleast 3' },
            maxLength: 12,
          })}
        />
        {/* link input to Form before any validation, api call or anything else */}
        {errors.firstname && (
          <p className="err-msg">{errors.firstname.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="">Middle Name:</label>
        <input
          className={errors.middlename ? 'input-error' : ''}
          type="text"
          {...register('middlename', {
            required: false,
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'Middle Name is not as per Regex rules',
            },
            minLength: { value: 3, message: 'Min Length atleast 3' },
            maxLength: { value: 8, message: 'Max Length atmost 8' },
          })}
        />
        {errors.middlename && (
          <p className="text-red-500">{errors.middlename.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="">Last Name:</label>
        <input
          className={errors.lastname ? 'input-error' : ''}
          type="text"
          {...register('lastname', {
            required: 'Last Name is Required',
            minLength: { value: 3, message: 'Min Length atleast 3' },
            maxLength: { value: 8, message: 'Max Length atmost 8' },
          })}
        />
        {errors.lastname && (
          <p className="err-msg">{errors.lastname.message}</p>
        )}
      </div>
      <div className="text-center">
        <input
          className="text-black bg-slate-200 cursor-pointer"
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? 'Submitting..' : 'Submitted'}
        />
      </div>
    </form>
  );
}
