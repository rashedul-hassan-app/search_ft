using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Support.UI;

namespace CRUDtests
{

	/// <summary>
	/// This class makes use of Firefox to test all the test cases
	/// NUnit and Nunit Adapter is a prerequisite. 
	/// Solution was written on Mac OS X
	/// </summary>
	[TestFixture]

	public class End2EndTests
    {
		IWebDriver driver;

		public string mBaseUrl = "https://shielded-brook-07382.herokuapp.com";
		public string mTestDir = TestContext.CurrentContext.TestDirectory;

		#region Setup environment
		[SetUp]
		public void StartBrowser()
		{
			driver = new FirefoxDriver(mTestDir);
			driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(30);
		}
		#endregion



		#region tests

		[Test]
		public void SearchForBrexit()
		{
            //  Search for this term
			var name = "Brexit";
			driver.Navigate().GoToUrl(mBaseUrl);

            //  Type the query on the search box
			Enter_Data_On_Text_Box_By_ID("txtName", name);

            //  Click the button
			var btn = driver.FindElement(By.XPath("/html/body/div[2]/div/div/div/div[1]/a"));
			btn.Click();
			Thread.Sleep(1000);

            //  Error thrown if button not available
            try
            {
                //  Check list items has text and are available
				IWebElement result = driver.FindElement(By.Id("search_item_1"));
				Assert.That(result.Text.Length > 0);

			}
            catch(Exception e)
            {
				Assert.Fail();
            }
		}

		[Test]
		public void TestEmptyBoxReturnsResult()
		{

			//  Search for this term
			var name = "";
			driver.Navigate().GoToUrl(mBaseUrl);

			//  Type the query on the search box
			Enter_Data_On_Text_Box_By_ID("txtName", name);

			//  Click the button
			var btn = driver.FindElement(By.XPath("/html/body/div[2]/div/div/div/div[1]/a"));
			btn.Click();
			Thread.Sleep(1000);

			try
			{
                //  Check for search result
				IWebElement result = driver.FindElement(By.Id("search_item_1"));
				Assert.That(result.Text.Length > 0);

			}
			catch (Exception e)
			{
				Assert.Fail();
			}

		}

        [Test]
        public void TestPagination_Click_Page2()
        {

			//  Search for this term
			var name = "Brexit";
			driver.Navigate().GoToUrl(mBaseUrl);

			//  Type the query on the search box
			Enter_Data_On_Text_Box_By_ID("txtName", name);

			//  Click the button
			var btn = driver.FindElement(By.XPath("/html/body/div[2]/div/div/div/div[1]/a"));
			btn.Click();


            //  Go to Page 2
			driver.Navigate().GoToUrl(mBaseUrl + "/search?find=" + name + "&page_num=2");
			Thread.Sleep(1000);
			try
			{
                //  Next page will have the 11th item available
				IWebElement result = driver.FindElement(By.Id("search_item_10"));
				Assert.That(result.Text.Length > 0);

			}
			catch (Exception e)
			{
				Assert.Fail();
			}
		}


		#endregion

        //  Helper method
		public void Enter_Data_On_Text_Box_By_ID(string id, string data)
		{
			IWebElement item = driver.FindElement(By.Id(id));
			item.SendKeys(data);
		}

		#region Cleanup
		[TearDown]
		public void CloseBrowser()
		{
            driver.Close();
        }

		#endregion
	}
}
