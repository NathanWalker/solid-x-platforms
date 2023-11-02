import { PageTransition, SharedTransition, Screen } from '@nativescript/core';
import { Counter } from '@solid-x-platforms/components';
import { useRouter } from '../router';

export const Home = () => {
  const router = useRouter();

  return (
    <>
      <actionbar title="Home" />
      <gridlayout rows="*,auto,auto,auto,auto,*">
        <stacklayout row="1">
          <Counter />
        </stacklayout>
        <button
          row="2"
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
            row="3"
            swiftId="toggle3D"
            data={{ type: 'solid', title: 'Solid 3D', typeId: 'Solid' }}
            className="h-center h-[50] mt-10"
          />
        )}
        {global.isVisionOS && (
          <swiftui
            row="4"
            swiftId="toggle3D"
            data={{ type: 'globe', title: 'View Globe', typeId: 'Globe' }}
            className="h-center h-[50] mt-10"
          />
        )}

        <image
          rowSpan="6"
          src="~/assets/solid.png"
          width="100"
          height="100"
          className="align-bottom mb-8"
          sharedTransitionTag="logo"
        />
      </gridlayout>
    </>
  );
};
