import { PageTransition, SharedTransition, Screen } from '@nativescript/core';
import { Counter } from '@solid-x-platforms/components';
import { useRouter } from '../router';

export const Home = () => {
  const router = useRouter();

  return (
    <>
      <actionbar title="Home" className="bg-sky-800 text-white" />
      <stacklayout className="p-4 h-full">
        <label
          className={`text-5xl font-thin uppercase my-16 text-center ${global.isVisionOS ? 'text-white' : 'text-sky-700'}`}
        >
          Hello World!
        </label>
        <Counter />
        <button
          className="rounded-full bg-blue-500 text-white w-[300] p-3 text-2xl font-bold text-center capitalize mt-10"
          iosOverflowSafeArea="false"
          text="Navigate to About"
          on:tap={() => {
            router.navigate(
              'Settings',
              global.isVisionOS
                ? undefined
                : {
                    transition: SharedTransition.custom(new PageTransition(), {
                      pageOut: {
                        x: -Screen.mainScreen.widthDIPs,
                      },
                      pageReturn: {
                        x: 0,
                        y: 100,
                      },
                    }),
                  }
            );
          }}
        />

        {global.isVisionOS && (
          <swiftui
            swiftId="toggle3D"
            data={{ type: 'solid', title: 'Solid 3D', typeId: 'Solid' }}
            className="h-center h-[50] mt-4"
          />
        )}
        {global.isVisionOS && (
          <swiftui
            swiftId="toggle3D"
            data={{ type: 'globe', title: 'View Globe', typeId: 'Globe' }}
            className="h-center h-[50] mt-4"
          />
        )}

        <gridlayout rows="*,auto" className="align-bottom">
          <image
            src="~/assets/solid.png"
            width="70"
            height="70"
            row={1}
            className="align-bottom mb-8"
            sharedTransitionTag="logo"
            on:tap={() => {
              if (global.isIOS) {
                FLEXManager.sharedManager.showExplorer();
              }
            }}
          />
        </gridlayout>
      </stacklayout>
    </>
  );
};

declare var FLEXManager;
