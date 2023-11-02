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

class Toggle3DButtonData: ObservableObject {
    @Published var type: String = "globe"
    @Published var title: String = "View Globe"
    @Published var typeId: String = "Globe"
}

@objc
class Toggle3DButtonProvider: UIViewController, SwiftUIProvider {
    private var swiftUIData = Toggle3DButtonData()
   private var swiftUI: Toggle3DButton?

  required init?(coder aDecoder: NSCoder) {
    super.init(coder: aDecoder)
  }

  required public init() {
    super.init(nibName: nil, bundle: nil)
  }

  public override func viewDidLoad() {
    super.viewDidLoad()
  }

  func updateData(data: NSDictionary) {
    let enumerator = data.keyEnumerator()
      while let k = enumerator.nextObject() {
          let key = k as! String
          let v = data.object(forKey: key)
          if (v != nil) {
              if (key == "type") {
                  swiftUIData.type = v as! String
              } else if (key == "title") {
                  swiftUIData.title = v as! String
              } else if (key == "typeId") {
                  swiftUIData.typeId = v as! String
              }
          }
      }
    if (self.swiftUI == nil) {
        swiftUI = Toggle3DButton(type: swiftUIData.type, title: swiftUIData.title, id: swiftUIData.typeId)
        setupSwiftUIView(content: swiftUI)
    } else {
        // engage data binding right away
        // self.swiftUI?.data = swiftUIData
    }
  }
  var onEvent: ((NSDictionary) -> ())?
}
