import SwiftUI
import UIKit

struct Toggle3DButton: View {
    @State var isShowing: Bool = false
    var type: String
    var title: String
    var id: String

    @Environment(\.openWindow) private var openWindow
    @Environment(\.dismissWindow) private var dismissWindow
    @Environment(\.openImmersiveSpace) private var openImmersiveSpace
    @Environment(\.dismissImmersiveSpace) private var dismissImmersiveSpace

    
    var body: some View {
        Toggle(title, isOn: $isShowing)
            .onChange(of: isShowing) { wasShowing, isShowing in
                Task {
                    if isShowing {
                        if (type == "solar") {
                            await openImmersiveSpace(id: id)
                        } else {
                            openWindow(id: id)
                        }
                    } else {
                        if (type == "solar") {
                            await dismissImmersiveSpace()
                        } else {
                            dismissWindow(id: id)
                        }
                    }
                }
            }
            .toggleStyle(.button)
    }
}

@objc
class Toggle3DButtonProvider: UIViewController, SwiftUIProvider {
  required init?(coder aDecoder: NSCoder) {
    super.init(coder: aDecoder)
  }

  required public init() {
    super.init(nibName: nil, bundle: nil)
  }

  public override func viewDidLoad() {
    super.viewDidLoad()
    setupSwiftUIView(content: Toggle3DButton(type: "globe", title: "View Globe", id: "Globe"))
  }

  func updateData(data: NSDictionary) {}
  var onEvent: ((NSDictionary) -> ())?
}
