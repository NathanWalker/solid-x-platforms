import { useRouter } from '../router';

export const Settings = () => {
  const router = useRouter();
  return (
    <>
      <actionbar title="About" className="bg-sky-800 text-white" />
      {/* rows="*,auto,auto,*" */}
      <stacklayout className="h-full">
        <label
          className={`text-5xl font-thin uppercase my-16 text-center ${global.isVisionOS ? 'text-white' : 'text-sky-700'}`}
        >
          About Page
        </label>
        <button
          row="1"
          text="Go to Home"
          on:tap={() => {
            router.goBack();
          }}
          className="rounded-full bg-blue-500 text-white w-[300] p-3 text-2xl font-bold text-center capitalize"
        />
        <gridlayout rows="*,auto" className="align-bottom">
          <image
            src="~/assets/solid.png"
            width="300"
            height="300"
            row={1}
            className="align-bottom mb-8"
            sharedTransitionTag="logo"
          />
        </gridlayout>
      </stacklayout>
    </>
  );
};
