import json
import time

from selenium import webdriver

from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.firefox.options import Options

with open('/home/alxlazar/Projects/alxlazar-personal-projects-core-dev/web-scraper-py/site_db.json') as data_file:
    data = json.load(data_file)
    
    for productKey, productData in data.items():
        print(productKey)
        minItem = ""
        minPrice = 100.0
        for siteName, siteData in productData.items():
            print(f"  {siteName}")
            # Setup Firefox options and service
            options = Options()
            options.add_argument("-headless")
            options.add_argument('--disable-blink-features=AutomationControlled')
            with webdriver.Firefox(options=options) as driver:
                try:
                    # driver.implicitly_wait(5)
                    driver.get(siteData['url'])
                    WebDriverWait(driver, 10).until(
                        EC.presence_of_element_located((By.TAG_NAME, "h1"))
                    )
                
                    path = siteData['price_xpath']
                    priceTemp = driver.find_element('xpath', path)
                    # time.sleep(5)
                    price = eval(siteData['price'])

                    if(float(price) < float(minPrice)):
                        minPrice = price
                        minItem = siteName
                    print(f"    {price}")
                except Exception as e:
                    print(f"An error occurred: {e}")
                finally:
                    driver.quit()

        print(f"Best price for {productKey} is {minPrice} lei on {minItem}")