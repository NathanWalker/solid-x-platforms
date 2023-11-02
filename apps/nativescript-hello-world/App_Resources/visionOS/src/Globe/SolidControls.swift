/*
See the LICENSE.txt file for this sample’s licensing information.

Abstract:
Controls that people can use to manipulate the globe in a volume.
*/

import SwiftUI

/// Controls that people can use to manipulate the globe in a volume.
struct SolidControls: View {
    @Environment(ViewModel.self) private var model
    @State private var isTiltPickerVisible: Bool = false

    var body: some View {
        @Bindable var model = model

        VStack(alignment: .tiltButtonGuide) {

            HStack(spacing: 17) {
                // Toggle(isOn: $model.globeEarth.showSun) {
                //     Label("Sun", systemImage: "sun.max")
                // }

                // Toggle(isOn: $model.globeEarth.showPoles) {
                //     Label("Poles", systemImage: "mappin.and.ellipse")
                // }

                Toggle(isOn: $model.isGlobeRotating) {
                    Label("Rotate", systemImage: "arrow.triangle.2.circlepath")
                }

                Toggle(isOn: $isTiltPickerVisible) {
                    Label("Tilt", systemImage: "cloud.sun.fill")
                }
                .alignmentGuide(.tiltButtonGuide) { context in
                    context[HorizontalAlignment.center]
                }
            }
            .toggleStyle(.button)
            .buttonStyle(.borderless)
            .labelStyle(.iconOnly)
            .padding(12)
            .glassBackgroundEffect(in: .rect(cornerRadius: 50))
            .alignmentGuide(.controlPanelGuide) { context in
                context[HorizontalAlignment.center]
            }
            .accessibilitySortPriority(2)
        }

        // Update the date that controls the Earth's tilt.
//        .onChange(of: model.globeTilt) { _, tilt in
//            model.globeEarth.date = tilt.date
//        }
    }
}
