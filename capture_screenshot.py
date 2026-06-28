from playwright.sync_api import sync_playwright

def capture_screenshot():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:5173")
        page.wait_for_timeout(2000)
        page.screenshot(path="landing_page.png", full_page=True)
        browser.close()

if __name__ == "__main__":
    capture_screenshot()
