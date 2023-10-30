import { useRouter } from "../router";

export const Settings = () => {
  const router = useRouter();
  return (
    <>
      <actionbar title="About" />
      <gridlayout rows="*,auto,auto,*">
        
        <button
        row="1"
          text="Go to Home"
          on:tap={() => {
            router.goBack();
          }}
          className="rounded-full bg-blue-500 text-white w-[300] p-3 text-2xl font-bold text-center capitalize"
        />
        <image
          rowSpan="4"
          src="~/assets/solid.png"
          width="200"
          height="200"
          className="align-bottom mb-8"
          sharedTransitionTag="logo"
        />
      </gridlayout>
    </>
  );
};
