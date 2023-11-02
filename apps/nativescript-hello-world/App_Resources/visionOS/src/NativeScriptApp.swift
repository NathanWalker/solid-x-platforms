import SwiftUI
import Observation
import WorldAssets

@main
struct NativeScriptApp: App {

    // The view model.
    @State private var model = EnvData.model

    var body: some Scene {
        NativeScriptMainWindow()

        // A volume that displays a globe.
        WindowGroup(id: "Globe") {
            Globe()
                .environment(model)
        }
        .windowStyle(.volumetric)
        .defaultSize(width: 0.6, height: 0.6, depth: 0.6, in: .meters)

        // A volume that displays Solid logo.
        WindowGroup(id: "Solid") {
            Solid()
                .environment(model)
        }
        .windowStyle(.volumetric)
        .defaultSize(width: 0.6, height: 0.6, depth: 0.6, in: .meters)
    }

    init() {
        // Register all the custom components and systems that the app uses.
        RotationComponent.registerComponent()
        RotationSystem.registerSystem()
        TraceComponent.registerComponent()
        TraceSystem.registerSystem()
        SunPositionComponent.registerComponent()
        SunPositionSystem.registerSystem()
    }
}

class EnvData {
    static var model = ViewModel()
}