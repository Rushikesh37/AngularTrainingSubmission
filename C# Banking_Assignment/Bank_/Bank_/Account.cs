using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank_
{
    public class Account
    {
        string cust_Name;
        private int age;
        string location;
        string state;
        string country;
        string emailId;
        string type;
        string accNumber;
        double balance;

        public Account()
        {
            


        }

        public void setType(string type)
        {
            this.type = type;
        }

        public string getType()
        {
            return this.type;
        }

        public virtual void Deposit(double amount)
        {
            Console.WriteLine("deposite method");

        }


        public void createAccount()
        {
            Console.WriteLine("Enter Below Details to create account");

            Console.Write("Type your first name: ");
            cust_Name = Console.ReadLine();

            Console.Write("Type your Age: ");
             age = Convert.ToInt32(Console.ReadLine());
            if (age > 68)
            {
                Console.WriteLine("You are not eligible your age is greater than 68");
            }
            else
            {
                Console.Write("Enter Your Location: ");
                location = Console.ReadLine();

                Console.Write("Enter Your state: ");
                state = Console.ReadLine();

                Console.Write("Enter Your country: ");
                country = Console.ReadLine();

                Console.Write("Enter Your EmailId: ");
                emailId = Console.ReadLine();
            }

            if (type == "saving")
            {
                string startNo = "Sav";
                Random r = new Random();
                string r1 = r.Next(0, 999999).ToString("D6");
                accNumber = startNo + r1;

                Console.WriteLine("Congratulations!!!,Your Saving account created your account no is {0}", accNumber);

            }
            else
            {
                string startNo = "Curr";
                Random r = new Random();
                string r1 = r.Next(0, 999999).ToString("D6");
                accNumber = startNo + r1;

                Console.WriteLine("Congratulations!!!,Your Current account created your account no is {0}", accNumber);
            }
        }


        public void showBalance(string name)
        {

            if (cust_Name == name)
            {
                Console.WriteLine("Your balance is {0}", balance);
            }
            else
            {
                Console.WriteLine("No such name exists");
            }

        }

        public void accountDetials(string accNo)
        {
            if (accNumber == accNo)
            {
                Console.WriteLine("Your account detils is:\n Name={0}\n EmailId={1}\n Account type={2}\n Balance={3}", cust_Name,emailId,type,balance);
            }
            else
            {
                Console.WriteLine("You Enter a wrong Account number!!");
            }
        }

    }  

   
}
